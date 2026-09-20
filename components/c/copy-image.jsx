import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qagc1qa8v.css';
import '../../css/s/sicbtiqev.css';
import '../../css/a/a1hf6cbte.css';
import '../../css/t/ts9smabjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qagc1qa8v"/><rect class="sicbtiqev"/><circle class="a1hf6cbte"/><path class="ts9smabjq"/></g>`,
		"fallback": "lucide-lab:copy-image",
	});
}

export default Component;
