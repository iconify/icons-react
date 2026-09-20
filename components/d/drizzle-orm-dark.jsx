import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m00li1bzt.css';
import '../../css/d/dcthf7bbi.css';

const viewBox = {"width":160,"height":160};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="m00li1bzt"><rect transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)" class="dcthf7bbi"/><rect transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)" class="dcthf7bbi"/></g>`,
		"fallback": "thesvg-color:drizzle-orm-dark",
	});
}

export default Component;
