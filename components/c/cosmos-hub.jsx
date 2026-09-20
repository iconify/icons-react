import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9p35ebyv.css';
import '../../css/t/tn1bqmqhf.css';
import '../../css/f/fle4ekbxc.css';
import '../../css/m/m2bcqj2zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9p35ebyv"/><path clip-rule="evenodd" class="tn1bqmqhf"/><path class="fle4ekbxc"/><path clip-rule="evenodd" class="m2bcqj2zn"/>`,
		"fallback": "token:cosmos-hub",
	});
}

export default Component;
