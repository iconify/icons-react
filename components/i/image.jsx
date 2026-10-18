import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3ue-ubdv.css';
import '../../css/f/fsg-qo40i.css';
import '../../css/k/kyhfpkiin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3ue-ubdv"/><path class="fsg-qo40i"/><path class="kyhfpkiin"/></g>`,
		"fallback": "vadivam:image",
	});
}

export default Component;
