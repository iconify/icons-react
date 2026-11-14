import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kw58g7bno {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 6q0-3.25 3.25-3.25h11q3.25 0 3.25 3.25v8q0 3.25-3.25 3.25h-6.218l-3.788 3.314q-.112.099-.254.146q-.141.048-.29.038t-.282-.076q-.134-.066-.232-.178q-.09-.103-.138-.23q-.048-.128-.048-.264v-2.755q-3-.123-3-3.245zm5.554 6.221q-.028.069-.041.142t-.013.146t.016.146t.045.14t.071.129t.094.113t.115.092t.13.067q.069.028.142.041t.146.013t.146-.016t.14-.045t.129-.071t.113-.094t.092-.115t.067-.13l2-5q.056-.139.054-.288t-.061-.286q-.058-.138-.165-.242t-.245-.159q-.069-.028-.142-.041t-.146-.013t-.146.016t-.14.045t-.129.071t-.113.094t-.092.115t-.067.13zm5-5l-2 5q-.028.069-.041.142t-.013.146t.016.146t.045.14t.071.129t.094.113t.115.092t.13.067q.069.028.142.041t.146.013t.146-.016t.14-.045t.129-.071t.113-.094t.092-.115t.067-.13l2-5q.056-.139.054-.288t-.061-.286q-.058-.138-.165-.242t-.245-.159q-.069-.028-.142-.041t-.146-.013t-.146.016t-.14.045t-.129.071t-.113.094t-.092.115t-.067.13");
}
</style><path class="kw58g7bno"/>`,
		"fallback": "uix-solid:code-comment",
	});
}

export default Component;
