import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvfl6rbyb.css';
import '../../css/i/iu8u25bgh.css';
import '../../css/c/cvkuub02k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvfl6rbyb"/><path class="iu8u25bgh"/><path class="cvkuub02k"/>`,
		"fallback": "devicon:git-wordmark",
	});
}

export default Component;
