import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnojpx50x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnojpx50x"/>`,
		"fallback": "devicon-plain:huggingface-wordmark",
	});
}

export default Component;
