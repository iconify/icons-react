import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5jeenne.css';
import '../../css/t/tkw3w5bpe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy5jeenne"/><path class="tkw3w5bpe"/>`,
		"fallback": "ant-design:build-twotone",
	});
}

export default Component;
