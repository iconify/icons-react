import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjlkkr6dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjlkkr6dl"/>`,
		"fallback": "lineicons:google-drive",
	});
}

export default Component;
