import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewf5p9bbr.css';
import '../../css/z/z_zrozxsx.css';
import '../../css/x/x3evh5ben.css';
import '../../css/d/dtlaqnd5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ewf5p9bbr"/><path class="z_zrozxsx"/><path class="x3evh5ben"/><path class="dtlaqnd5k"/>`,
		"fallback": "solar:card-search-bold",
	});
}

export default Component;
