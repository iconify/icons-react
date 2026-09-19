import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84vznkgo.css';
import '../../css/a/a-1ejqbjh.css';
import '../../css/s/sbo79i6qt.css';
import '../../css/s/sj5f_cdsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w84vznkgo"/><circle class="a-1ejqbjh"/><circle class="sbo79i6qt"/><circle class="sj5f_cdsq"/>`,
		"fallback": "famicons:bowling-ball-outline",
	});
}

export default Component;
