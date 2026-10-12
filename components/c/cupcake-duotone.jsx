import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfea1w8pd.css';
import '../../css/e/ec2n0sbxz.css';
import '../../css/r/r16u45bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfea1w8pd"/><path class="ec2n0sbxz"/><path class="r16u45bjy"/></g>`,
		"fallback": "lucide-extended:cupcake-duotone",
	});
}

export default Component;
