import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4nuulbsj.css';
import '../../css/f/f05npmyne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4nuulbsj"/><path class="f05npmyne"/></g>`,
		"fallback": "streamline-ultimate:audio-file-mp-3",
	});
}

export default Component;
