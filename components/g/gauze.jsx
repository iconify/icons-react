import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/emo24lblh.css';
import '../../css/z/zq1txsbbf.css';
import '../../css/q/qw1suyb4s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmYwtObAk"><g class="rohhhzb0l"><circle class="emo24lblh"/><circle class="zq1txsbbf"/><path class="qw1suyb4s"/></g></mask></defs><path mask="url(#SVGmYwtObAk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gauze",
	});
}

export default Component;
