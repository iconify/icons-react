import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gti8xs7st.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gti8xs7st"/>`,
		"fallback": "gravity-ui:folders",
	});
}

export default Component;
