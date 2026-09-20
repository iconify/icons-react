import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x4a6dqb5j.css';
import '../../css/o/o2otl66de.css';
import '../../css/q/qxcikmwcv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x4a6dqb5j"/><path class="o2otl66de"/><path class="qxcikmwcv"/></g>`,
		"fallback": "streamline:gameboy",
	});
}

export default Component;
