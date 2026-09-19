import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sklifk85i.css';
import '../../css/p/pedb1bc2f.css';
import '../../css/v/v7tfftbgx.css';
import '../../css/h/h81ghgbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sklifk85i"/><path class="pedb1bc2f"/><path class="v7tfftbgx"/><path class="h81ghgbqt"/></g>`,
		"fallback": "hugeicons:fry",
	});
}

export default Component;
