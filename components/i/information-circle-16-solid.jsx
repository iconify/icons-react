import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufm3krb1c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ufm3krb1c"/>`,
		"fallback": "heroicons:information-circle-16-solid",
	});
}

export default Component;
