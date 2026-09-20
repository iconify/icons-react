import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed42ny0st.css';
import '../../css/o/oa61y1bhx.css';
import '../../css/f/fasmlpb0i.css';
import '../../css/p/plit5mb5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed42ny0st"/><path class="oa61y1bhx"/><path class="fasmlpb0i"/><path class="plit5mb5e"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-video-camera-film-2",
	});
}

export default Component;
