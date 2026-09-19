import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jw49ldhsl.css';
import '../../css/t/tlktmtbnx.css';
import '../../css/h/hlibm728q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYwtPweso"><g class="rohhhzb0l"><circle class="jw49ldhsl"/><path class="tlktmtbnx"/><circle class="hlibm728q"/></g></mask></defs><path mask="url(#SVGYwtPweso)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:assembly-line",
	});
}

export default Component;
