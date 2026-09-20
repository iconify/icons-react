import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz-342bwo.css';
import '../../css/q/qw0rhm64r.css';
import '../../css/i/i5c88j1ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cz-342bwo"/><circle class="qw0rhm64r"/><path class="i5c88j1ev"/></g>`,
		"fallback": "lucide-lab:cricket-wicket",
	});
}

export default Component;
