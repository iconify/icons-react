import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kttdzsm5x {
  fill: var(--svg-color--00b3e0, #00b3e0);
  fill-rule: evenodd;
  d: path("M127.586 0C198.835 0 256 57.165 256 127.586A127.997 127.997 0 0 1 127.586 256C57.165 256 0 198.835 0 127.586C0 57.165 57.165 0 127.586 0m31.482 152.44c-14.084 18.227-39.767 21.54-57.165 7.456c-17.398-13.255-19.884-38.938-5.8-57.165c14.913-17.398 40.596-20.712 57.994-7.456c17.398 14.084 19.884 39.767 4.971 57.165m-67.935 83.677l48.88-47.224c-18.227 4.143-37.282.829-52.194-11.599c-17.398-13.255-24.855-35.624-22.37-56.336L21.54 169.01s-5.799-10.77-7.456-30.654l77.049-60.479c23.197-16.57 54.68-17.398 77.048 0c24.855 19.884 29.825 56.337 11.599 83.676l-56.337 80.363c-8.284 0-24.854-2.486-32.31-5.8");
}
</style><path class="kttdzsm5x"/>`,
		"fallback": "logos:appveyor",
	});
}

export default Component;
