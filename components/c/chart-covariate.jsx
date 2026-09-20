import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njc6ft7np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njc6ft7np"/>`,
		"fallback": "tabler:chart-covariate",
	});
}

export default Component;
