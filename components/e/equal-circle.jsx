import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3-nd4bnk.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/f/fiavfxncv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3-nd4bnk"/><path class="bwibdw4bb"/><path class="fiavfxncv"/>`,
		"fallback": "boxicons:equal-circle",
	});
}

export default Component;
