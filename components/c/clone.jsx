import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdp245_wj.css';
import '../../css/t/ttyer50st.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdp245_wj"/><path class="ttyer50st"/>`,
		"fallback": "iwwa:clone",
	});
}

export default Component;
