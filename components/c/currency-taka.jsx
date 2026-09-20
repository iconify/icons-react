import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ry5of6-pd.css';
import '../../css/a/a_81q4h6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ry5of6-pd"/><path class="a_81q4h6c"/></g>`,
		"fallback": "tabler:currency-taka",
	});
}

export default Component;
