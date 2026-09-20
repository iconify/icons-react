import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/futw48ihu.css';
import '../../css/s/sngyf7baf.css';
import '../../css/l/lg55wobni.css';
import '../../css/a/apeazccje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="futw48ihu"/><path class="sngyf7baf"/><path class="lg55wobni"/><path class="apeazccje"/>`,
		"fallback": "streamline-freehand:image-file-edit",
	});
}

export default Component;
