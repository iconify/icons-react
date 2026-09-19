import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6b2j8btj.css';
import '../../css/w/wrweh8jcs.css';
import '../../css/h/ho0kx1xbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6b2j8btj"/><path class="wrweh8jcs"/><path class="ho0kx1xbu"/>`,
		"fallback": "icomoon-free:database",
	});
}

export default Component;
