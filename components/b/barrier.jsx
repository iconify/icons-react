import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emylgjb0y.css';
import '../../css/r/rbak6zq5p.css';
import '../../css/z/zxys3pw6q.css';
import '../../css/z/zkwmf0bbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs/><path class="emylgjb0y"/><path class="rbak6zq5p"/><path class="zxys3pw6q"/><path class="zkwmf0bbe"/>`,
		"fallback": "carbon:barrier",
	});
}

export default Component;
