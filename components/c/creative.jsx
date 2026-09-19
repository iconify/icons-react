import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mp35itqef.css';
import '../../css/z/zsa0j9bqs.css';
import '../../css/y/yzxj7cccj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQQoNLd6N"><g class="v3_i3wktz"><path class="mp35itqef"/><path class="zsa0j9bqs"/><path class="yzxj7cccj"/></g></mask></defs><path mask="url(#SVGQQoNLd6N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:creative",
	});
}

export default Component;
