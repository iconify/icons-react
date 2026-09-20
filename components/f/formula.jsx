import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjhypr_5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjhypr_5z"/>`,
		"fallback": "pajamas:formula",
	});
}

export default Component;
