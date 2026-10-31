import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejspzxvkq.css';
import '../../css/j/j1eaccb_w.css';
import '../../css/b/bky4wdbzp.css';
import '../../css/m/mhqiglwct.css';
import '../../css/r/r29g9cgtn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejspzxvkq"/><path class="j1eaccb_w"/><path class="bky4wdbzp"/><path class="mhqiglwct"/><path class="r29g9cgtn"/>`,
		"fallback": "iconito:chickpea",
	});
}

export default Component;
