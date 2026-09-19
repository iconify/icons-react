import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/z/zqs4nmb8t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGy1smDcXT"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="zqs4nmb8t"/></g></mask></defs><path mask="url(#SVGy1smDcXT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-text-two",
	});
}

export default Component;
