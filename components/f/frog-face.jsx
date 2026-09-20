import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nccoq5b0y.css';
import '../../css/t/th2dgc5ur.css';
import '../../css/e/e9jotbc-e.css';
import '../../css/c/csq3qnmej.css';
import '../../css/z/zsp8feb3r.css';
import '../../css/n/nb0hdkyzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nccoq5b0y"/><circle class="th2dgc5ur"/><path class="e9jotbc-e"/><circle class="csq3qnmej"/><path class="zsp8feb3r"/><path class="nb0hdkyzs"/></g>`,
		"fallback": "lucide-lab:frog-face",
	});
}

export default Component;
