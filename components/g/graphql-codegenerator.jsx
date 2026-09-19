import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsa3t6fnw.css';

const viewBox = {"width":393,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsa3t6fnw"/>`,
		"fallback": "file-icons:graphql-codegenerator",
	});
}

export default Component;
