import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jayohlbpc.css';
import '../../css/g/gqkpcf_4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGzFHJzbhZ" class="n1mjunbsu"><path class="jayohlbpc"/></mask><path mask="url(#SVGzFHJzbhZ)" class="gqkpcf_4j"/>`,
		"fallback": "lets-icons:folder-duotone-line",
	});
}

export default Component;
