import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1xg7eiii.css';
import '../../css/g/gzw7gyr6o.css';
import '../../css/s/s1z0bh-al.css';
import '../../css/n/nqy-9n9qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g1xg7eiii"/><path class="gzw7gyr6o"/><path class="s1z0bh-al"/><path class="nqy-9n9qs"/></g>`,
		"fallback": "reicon:cards",
	});
}

export default Component;
