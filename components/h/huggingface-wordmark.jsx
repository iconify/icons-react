import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdhrlnphl.css';
import '../../css/d/drbu3zb8y.css';
import '../../css/m/mol134btx.css';
import '../../css/t/t5hp_obfp.css';
import '../../css/k/k36i95p_h.css';
import '../../css/p/pjnb8bc5h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdhrlnphl"/><path class="drbu3zb8y"/><path class="mol134btx"/><path clip-rule="evenodd" class="t5hp_obfp"/><path clip-rule="evenodd" class="k36i95p_h"/><path class="pjnb8bc5h"/>`,
		"fallback": "devicon:huggingface-wordmark",
	});
}

export default Component;
