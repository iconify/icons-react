import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izssm8bhj.css';
import '../../css/j/jm2vxcz9l.css';
import '../../css/k/k-2bxsbuk.css';
import '../../css/x/x891vwcen.css';
import '../../css/v/vvqquubbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izssm8bhj"/><path class="jm2vxcz9l"/><path class="k-2bxsbuk"/><path class="x891vwcen"/><path class="vvqquubbf"/></g>`,
		"fallback": "streamline-ultimate-color:expand",
	});
}

export default Component;
