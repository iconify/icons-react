import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oanf-ubnv.css';
import '../../css/v/v8ju57b0q.css';
import '../../css/f/fnqikjb0b.css';
import '../../css/d/d7dakccci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oanf-ubnv wm-k"/><path class="v8ju57b0q wm-k"/><path class="fnqikjb0b wm-a"/><path class="d7dakccci wm-a"/>`,
		"fallback": "withicons-bauhaus:chevrons-left",
	});
}

export default Component;
