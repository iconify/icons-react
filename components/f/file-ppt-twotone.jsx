import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu3ocmbje.css';
import '../../css/e/eq_93_56q.css';
import '../../css/j/jso3jy2en.css';
import '../../css/a/a7at0s-6k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu3ocmbje"/><path class="eq_93_56q"/><path class="jso3jy2en"/><path class="a7at0s-6k"/>`,
		"fallback": "ant-design:file-ppt-twotone",
	});
}

export default Component;
