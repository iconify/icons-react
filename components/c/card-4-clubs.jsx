import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmuk_416i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmuk_416i"/>`,
		"fallback": "game-icons:card-4-clubs",
	});
}

export default Component;
