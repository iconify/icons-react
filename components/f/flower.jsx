import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr37mbccl.css';
import '../../css/k/kupi4sbtm.css';
import '../../css/p/psqa162mc.css';
import '../../css/e/epwd42pev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yr37mbccl"/><path class="kupi4sbtm wm-k"/><path class="psqa162mc wm-a"/><path class="epwd42pev wm-a"/>`,
		"fallback": "withicons-bauhaus:flower",
	});
}

export default Component;
