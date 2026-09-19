import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx2xkib9j.css';
import '../../css/o/ohqttrbzg.css';
import '../../css/r/rc5s9lb2u.css';
import '../../css/s/sz2rj1qef.css';
import '../../css/b/b7xz50bdg.css';
import '../../css/g/g2x47wb7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jx2xkib9j"/><rect class="ohqttrbzg"/><path class="rc5s9lb2u"/><circle class="sz2rj1qef"/><circle class="b7xz50bdg"/><path class="g2x47wb7f"/>`,
		"fallback": "ion:bus-outline",
	});
}

export default Component;
