import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k0nemo-kj.css';
import '../../css/s/spiqpdb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k0nemo-kj"/><path class="spiqpdb_f"/></g>`,
		"fallback": "streamline-ultimate:day-sunrise-1",
	});
}

export default Component;
