import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjnvknsco.css';
import '../../css/r/rfj-ftw5o.css';
import '../../css/t/tjimueesy.css';
import '../../css/z/za_u7lble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGg3FBRdMb" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="gjnvknsco"/><stop offset=".489" class="rfj-ftw5o"/><stop offset="1" class="tjimueesy"/></linearGradient><path fill="url(#SVGg3FBRdMb)" class="za_u7lble"/>`,
		"fallback": "selfhst:gns3",
	});
}

export default Component;
