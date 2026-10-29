import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6mivl14w.css';
import '../../css/o/ohpjererv.css';
import '../../css/k/kyfoklson.css';
import '../../css/c/cgny7ubsw.css';
import '../../css/a/a6ogh7bzp.css';
import '../../css/w/w_czame4b.css';
import '../../css/r/rlnm26x0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow z6mivl14w"/><path class="ohpjererv wm-k"/><path class="kyfoklson wm-k"/><path class="cgny7ubsw wm-k"/><path class="a6ogh7bzp wm-k"/><path class="w_czame4b wm-shine"/><path class="rlnm26x0b wm-a"/>`,
		"fallback": "withicons-plush:heart-pulse",
	});
}

export default Component;
