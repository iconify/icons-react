import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbblyu8os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbblyu8os"/>`,
		"fallback": "iconaut:ai-write-solid",
	});
}

export default Component;
