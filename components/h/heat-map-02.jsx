import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqhxs-bpd.css';
import '../../css/i/i_n518bgj.css';
import '../../css/p/p31v-_b8t.css';
import '../../css/u/uz70800jt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oqhxs-bpd"/><circle class="i_n518bgj"/><circle class="p31v-_b8t"/><path class="uz70800jt"/>`,
		"fallback": "carbon:heat-map-02",
	});
}

export default Component;
