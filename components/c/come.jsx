import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-_ohbfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwvM9ld2t"><path class="zw-_ohbfa"/></mask></defs><path mask="url(#SVGwvM9ld2t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:come",
	});
}

export default Component;
