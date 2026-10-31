import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffqf-bcny.css';
import '../../css/h/hfvyt7wet.css';
import '../../css/r/ro5dzvm8q.css';
import '../../css/m/mtqez028s.css';
import '../../css/z/zb8vxet2v.css';
import '../../css/k/kkrxhhbnt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffqf-bcny"/><path class="hfvyt7wet"/><path class="ro5dzvm8q"/><path class="mtqez028s"/><path class="zb8vxet2v"/><path class="kkrxhhbnt"/>`,
		"fallback": "iconito:cilantro",
	});
}

export default Component;
