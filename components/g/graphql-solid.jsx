import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2fe2ibbp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2fe2ibbp"/>`,
		"fallback": "teenyicons:graphql-solid",
	});
}

export default Component;
