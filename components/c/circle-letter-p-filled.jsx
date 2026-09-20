import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eocas0q3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eocas0q3f"/>`,
		"fallback": "tabler:circle-letter-p-filled",
	});
}

export default Component;
