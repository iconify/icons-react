import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrwnz618c.css';
import '../../css/f/fsg-qo40i.css';
import '../../css/g/gny4e5dob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mrwnz618c"/><path class="fsg-qo40i"/><path class="gny4e5dob"/></g>`,
		"fallback": "vadivam:image",
	});
}

export default Component;
